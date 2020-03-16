import React from 'react';
import { EuiCodeEditor } from '@elastic/eui';
import 'brace/mode/text';

import 'brace/mode/less';
import 'brace/theme/github';

export class Visualize extends React.Component {
  state = {
    value: https://github.com/jlanzuela/networking_plugin/blob/master/architecture.yml
  }

  render() {
    return (
      <EuiCodeEditor
        mode="less"
        theme="github"
        width="100%"
        value={this.state.value}
        setOptions={{ fontSize: '14px' }}
        isReadOnly
        />
    );
  }
}
