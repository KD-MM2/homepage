import Container from "components/services/widget/container";
import Block from "components/services/widget/block";
import useWidgetAPI from "utils/proxy/use-widget-api";

export default function Component({ service }) {
  const { widget } = service;

  const { data: containersData, error: containersError } = useWidgetAPI(widget, "workspaces");

  if (containersError) {
    return <Container service={service} error={containersError} />;
  }

  if (!containersData) {
    return (
      <Container service={service}>
        <Block label="coder.pending" />
        <Block label="coder.building" />
        <Block label="coder.running" />
        <Block label="coder.stopped" />
        <Block label="coder.failed" />
        <Block label="coder.total" />
      </Container>
    );
  }

  const workspacesData = containersData.workspaces;
  const pending = workspacesData.filter((c) => c.latest_build.status === "pending").length;
  const building = workspacesData.filter((c) => c.latest_build.status === "building").length;
  const running = workspacesData.filter((c) => c.latest_build.status === "running").length;
  const stopped = workspacesData.filter((c) => c.latest_build.status === "stopped").length;
  const failed = workspacesData.filter((c) => c.latest_build.status === "failed").length;
  const total = containersData.count;

  return (
    <Container service={service}>
      <Block label="coder.pending" value={pending} />
      <Block label="coder.building" value={building} />
      <Block label="coder.running" value={running} />
      <Block label="coder.stopped" value={stopped} />
      <Block label="coder.failed" value={failed} />
      <Block label="coder.total" value={total} />
    </Container>
  );
}
