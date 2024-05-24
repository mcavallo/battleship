interface ErrorScreenProps {
  error: Error;
}

export const ErrorScreen = ({ error }: ErrorScreenProps) => {
  return (
    <div className="error-screen" data-testid="intro-screen">
      <h1>Oops, something went wrong!</h1>
      {error.message && (
        <div className="error" role="error">
          {error.message}
        </div>
      )}
    </div>
  );
};
