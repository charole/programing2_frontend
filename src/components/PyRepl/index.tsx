import { CSSProperties } from 'react';

import styled from 'styled-components';

interface PyReplProps {
  id?: string;
  autoGenerate?: string;
  outputMode?: string;
  stdOut?: string;
  stdErr?: string;
  rootStyle?: CSSProperties;
  height?: number;
}

const Container = styled.div<PyReplProps>`
  .cm-scroller {
    height: ${(props) => `${props.height || 400}px`};
  }
  #btnRun {
    visibility: hidden;
  }
`;

export default function PyRepl({
  id,
  autoGenerate,
  outputMode,
  stdOut,
  stdErr,
  rootStyle,
  height,
}: PyReplProps) {
  return (
    <Container style={{ ...rootStyle }} height={height}>
      <py-repl
        id={id}
        auto-generate={autoGenerate}
        output-mode={outputMode}
        std-out={stdOut}
        std-err={stdErr}
      />
    </Container>
  );
}
