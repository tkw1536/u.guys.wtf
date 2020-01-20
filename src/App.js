import React from 'react';

import {CopyToClipboard} from 'react-copy-to-clipboard';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function App () {
  return (
    <Container>
      <Row>
        <h1>Unicode Text</h1>
      </Row>
      <TransformRow text="Strikethrough" transform={strike} />
    </Container>
  );
}

class TransformRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.text,
      transformed: this.props.transform(this.props.text),
      copied: false,
    }
  }

  onChange = (event) => this.setState({
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
            <Form.Control disabled readonly type='text' value={transformed} />
            &nbsp;
          </Col>
          <Col xs={12} md={2}>
            <CopyToClipboard text={transformed} onCopy={this.onCopy}>
                <Button>{copied ? "Copied!" : "Copy to clipboard"}</Button>
            </CopyToClipboard>
          </Col>
        </Row>
      </Form>
    )
  }
}

/** Function to generate strikethrough text */
const strike = (text) => Array.from(text).map(c => c + '\u0336').join('');