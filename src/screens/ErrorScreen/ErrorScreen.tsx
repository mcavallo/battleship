interface ErrorScreenProps {
  error: Error;
}

export const ErrorScreen = ({ error }: ErrorScreenProps) => {
  return (
    <div role="alert">
      <h1>Oops, something went wrong!</h1>
      <div className="error">{error.message}</div>
    </div>
  );
};
