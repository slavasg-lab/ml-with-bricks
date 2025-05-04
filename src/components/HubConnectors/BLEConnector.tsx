"use client";

import { useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";
import { LinkIcon, LinkOffIcon, PlayIcon, StopIcon } from "../Icons/Icons";
import { useBLE } from "../../contexts/BLEContext";
import Warning from "../Warnings/WarningBlock";
import Typography from "../Typography/Typography";
import InTextLink from "../Links/InTextLink";

interface Props {
  code: string;
  onStart(): Promise<void>;
}

const BLEConnector = ({ code, onStart }: Props) => {
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const { t } = useTranslation();
  const {
    connect,
    disconnect,
    connectionStatus,
    codeStatus,
    startProgram,
    stopProgram,
  } = useBLE();

  const handleRunCode = async () => {
    if (codeStatus === "on") await stopProgram();
    if (codeStatus === "off")
      await startProgram({
        code,
        onStart,
        onProgress: (percentage: number) => setUploadProgress(percentage),
      });
  };

  if (!navigator.bluetooth)
    return (
      <Warning>
        <Typography.Text>
          {t("HubInteraction.troubleshootingText.part1")}
          <InTextLink to={"/#/troubleshooting"}>
            {t("HubInteraction.troubleshootingText.link")}
          </InTextLink>
        </Typography.Text>
      </Warning>
    );

  return (
    <Wrapper>
      <Button
        onClick={connectionStatus === "open" ? disconnect : connect}
        text={t(`HubInteraction.portState.${connectionStatus}`)}
        icon={
          (connectionStatus === "closed" && <LinkIcon />) ||
          (connectionStatus === "open" && <LinkOffIcon />)
        }
        loading={["closing", "opening"].includes(connectionStatus)}
      />
      {connectionStatus === "open" && (
        <Button
          onClick={handleRunCode}
          text={
            codeStatus === "on"
              ? t("HubInteraction.stopCode")
              : t("HubInteraction.launchCode")
          }
          icon={
            (codeStatus === "off" && <PlayIcon />) ||
            (codeStatus === "on" && <StopIcon />)
          }
          loading={codeStatus === "uploading"}
          loadingProgress={uploadProgress}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  column-gap: 10px;
  row-gap: 10px;
  margin: 20px 0;
  align-items: center;

  @media (max-width: 425px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export default BLEConnector;
