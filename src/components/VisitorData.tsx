import { useVisitorData } from "@fingerprintjs/fingerprintjs-pro-react";
import { FunctionComponent } from "react";

const VisitorData: FunctionComponent = () => {
  const { isLoading, error, data } = useVisitorData({
    linkedId: "cloudflareIntegration",
    ignoreCache: true,
    extendedResult: true,
  });

  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  if (data) {
    // perform some logic based on the visitor data
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
