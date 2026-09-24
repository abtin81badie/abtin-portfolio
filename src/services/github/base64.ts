// UTF-8 safe base64 helpers (btoa/atob alone break on emoji and non-Latin text).

export function bytesToBase64(bytes: Uint8Array): string {
  let binary = "";
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
  }
  return btoa(binary);
}

export function base64ToBytes(base64: string): Uint8Array {
  const binary = atob(base64.replace(/\s/g, ""));
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

export const encodeText = (text: string): string => bytesToBase64(new TextEncoder().encode(text));
export const decodeText = (base64: string): string => new TextDecoder().decode(base64ToBytes(base64));
