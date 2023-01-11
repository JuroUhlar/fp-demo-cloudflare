import { useVisitorData } from "@fingerprintjs/fingerprintjs-pro-react";
import { FunctionComponent } from "react";

const VisitorData: FunctionComponent = () => {
  const { isLoading, error, data } = useVisitorData({
    linkedId: "cloudflareIntegration",
    ignoreCache: true,
    extendedResult: true,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  if (data) {
    console.log(data);
    return (
      <div>
        <div>Welcome {data.visitorFound ? `back ${data.visitorId}` : ""}!</div>
        <pre>{JSON.stringify(data, undefined, 2)}</pre>
      </div>
    );
  } else {
    return null;
  }
};

export default VisitorData;
