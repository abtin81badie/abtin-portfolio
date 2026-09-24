import { useState, type ChangeEvent } from "react";
import styled from "styled-components";
import { publicAsset } from "../../../config/site";
import { color, radius } from "../../../theme/tokens";
import { ButtonLabel } from "../../../ui/Button";
import { Icon } from "../../../ui/Icon";
import { Help } from "../editors/formUi";
import { useToast } from "../Toasts";
import type { PanelContext } from "./types";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
`;

const Card = styled.div`
  display: grid;
  gap: 14px;
  align-content: start;
  padding: 20px;
  border-radius: ${radius.lg};
  border: 1px solid ${color.border};
  background: ${color.bgElevated};

  h3 {
    font-size: 1.05rem;
  }
`;

const Photo = styled.img`
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid var(--primary);
`;

const Pdf = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: ${color.primary};
`;

const MAX_BYTES = 8 * 1024 * 1024;

const extension = (file: File) => file.name.split(".").pop()?.toLowerCase() ?? "";

export function AssetsPanel({ editor, uploader }: PanelContext) {
  const toast = useToast();
  const [busy, setBusy] = useState<"photo" | "resume" | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const content = editor.content;
  if (!content) return null;

  const upload = async (kind: "photo" | "resume", event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file || !uploader) return;
    if (file.size > MAX_BYTES) {
      toast("That file is larger than 8 MB — please compress it first.", "error");
      return;
    }

    const current = kind === "photo" ? content.profile.photo : content.resume.file;
    const base = current.replace(/\.[^.]+$/, "") || (kind === "photo" ? "profile" : "resume");
    const fileName = `${base}.${extension(file)}`;

    setBusy(kind);
    try {
      const { commitUrl } = await uploader.upload(fileName, file, `chore(assets): update ${kind} via admin panel`);
      if (kind === "photo") setPhotoPreview(URL.createObjectURL(file));
      if (fileName !== current) {
        if (kind === "photo") editor.update("profile", { ...content.profile, photo: fileName });
        else editor.update("resume", { ...content.resume, file: fileName });
      }
      toast(
        <>
          Uploaded <strong>{fileName}</strong>.{" "}
          {fileName !== current ? "Publish your changes to start using it. " : "It will be live after the next deploy. "}
          <a href={commitUrl} target="_blank" rel="noopener noreferrer">
            View commit
          </a>
        </>,
        "success",
      );
    } catch (error) {
      toast(`Upload failed: ${error instanceof Error ? error.message : String(error)}`, "error");
    } finally {
      setBusy(null);
    }
  };

  return (
    <Grid>
      <Card>
        <h3>Profile photo</h3>
        <Photo src={photoPreview ?? publicAsset(content.profile.photo)} alt="Current profile" />
        <Help>
          Currently <code>{content.profile.photo}</code>. A square image of at least 600×600 px looks best.
        </Help>
        <ButtonLabel variant="ghost" size="sm" disabled={!uploader || busy !== null}>
          <input type="file" accept="image/*" disabled={!uploader || busy !== null} onChange={(e) => upload("photo", e)} />
          <Icon name="upload" /> {busy === "photo" ? "Uploading…" : "Upload new photo"}
        </ButtonLabel>
      </Card>

      <Card>
        <h3>Resume (PDF)</h3>
        <Pdf href={publicAsset(content.resume.file)} target="_blank" rel="noopener noreferrer">
          <Icon name="external" size={16} /> {content.resume.file}
        </Pdf>
        <Help>Upload a new PDF to replace the downloadable resume.</Help>
        <ButtonLabel variant="ghost" size="sm" disabled={!uploader || busy !== null}>
          <input
            type="file"
            accept="application/pdf"
            disabled={!uploader || busy !== null}
            onChange={(e) => upload("resume", e)}
          />
          <Icon name="upload" /> {busy === "resume" ? "Uploading…" : "Upload new resume"}
        </ButtonLabel>
      </Card>

      {!uploader && <Help>Sign in with GitHub to upload files.</Help>}
    </Grid>
  );
}
