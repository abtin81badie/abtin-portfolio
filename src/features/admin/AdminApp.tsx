import { AdminWorkspace } from "./AdminWorkspace";
import { LoginScreen } from "./LoginScreen";
import { ToastProvider } from "./Toasts";
import { useAdminSession } from "./useAdminSession";

/** Entry point of the lazily loaded admin bundle (#/admin). */
export default function AdminApp({ panelId }: { panelId?: string }) {
  const { session, signIn, signOut, workOffline } = useAdminSession();

  return (
    <ToastProvider>
      {session.status === "online" || session.status === "offline" ? (
        <AdminWorkspace session={session} panelId={panelId} onSignOut={signOut} />
      ) : (
        <LoginScreen
          checking={session.status === "checking"}
          error={session.status === "signed-out" ? session.error : undefined}
          onSignIn={signIn}
          onOffline={workOffline}
        />
      )}
    </ToastProvider>
  );
}
