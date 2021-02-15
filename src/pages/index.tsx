import * as React from 'react';

import {CopyToClipboard} from 'react-copy-to-clipboard';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import {bolden, italicize, boldenAndItalicize, monospace, scriptize, subscript, superscript} from '../lib/fonts';

export default function App () {
  return (
    <Container>
      <Row>
        <h1>u.guys.wtf</h1>
      </Row>
      <TransformRow text="Strikethrough" transform={strike} />
      <TransformRow text="Bold" transform={bolden} />
      <TransformRow text="Italic" transform={italicize} />
      <TransformRow text="Bold & Italic" transform={boldenAndItalicize} />
      <TransformRow text="Monospace" transform={monospace} />
      <TransformRow text="Scriptize" transform={scriptize} />
      <Row>
        <h2>Incomplete</h2>
      </Row>
      <TransformRow text="Subscript" transform={subscript} />
      <TransformRow text="Superscript" transform={superscript} />
    </Container>
  );
}

interface TransformRowProps {
  text: string,
  transform: (text: string) => string,
}

interface TransformRowState {
  text: string,
  transformed: string,
  copied: boolean,
}


class TransformRow extends React.Component<TransformRowProps, TransformRowState> {
  constructor(props: TransformRowProps) {
    super(props);

    const {text, transform} = props;

    this.state = {
      text: text,
      transformed: transform(text),
      copied: false,
    };
  }

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => this.setState({
    text: event.target.value,
    transformed: this.props.transform(event.target.value),
    copied: false,
  });

  onCopy = () => {
    this.setState({copied: true});
  }

  render() {
    const {text, transformed, copied} = this.state;
    return (
      <Form>
        <Row>
          <Col xs={12} md={5}>
            <Form.Control type='text' value={text} onChange={this.onChange} />
            &nbsp;
          </Col>
          <Col xs={12} md={5}>
            <Form.Control disabled readOnly type='text' value={transformed} style={{
              fontFamily: 'monospace',
            }} />
            &nbsp;
          </Col>
          <Col xs={12} md={2}>
            <CopyToClipboard text={transformed} onCopy={this.onCopy}>
                <Button>{copied ? "Copied!" : "Copy to clipboard"}</Button>
            </CopyToClipboard>
            &nbsp;
          </Col>
          <Col className="d-block d-md-none">
            <hr />
          </Col>
        </Row>
      </Form>
    )
  }
}

/** Function to generate strikethrough text */
const strike = (text) => Array.from(text).map(c => c + '\u0336').join('');
