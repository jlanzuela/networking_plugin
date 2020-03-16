import React from 'react';
import {
  EuiPage,
  EuiPageHeader,
  EuiTitle,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentHeader,
  EuiPageContentBody,
  EuiText,
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
} from '@elastic/eui';
import { FormattedMessage } from '@kbn/i18n/react';
import { Visualize } from "../visualize";

import { EuiCodeEditor } from '@elastic/eui';
import 'brace/mode/text';

import 'brace/mode/less';
import 'brace/theme/github';

export class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <EuiPage>
        <EuiPageBody>
          <EuiPageHeader>
            <EuiTitle size="l">
              <h1>
                <FormattedMessage
                  id="networking.title"
                  defaultMessage="Networking"
                />
              </h1>
            </EuiTitle>
          </EuiPageHeader>
          <EuiPageContent>
            <EuiPageContentBody>
              <EuiFlexGroup gutterSize="l">
                <EuiFlexItem>
                  <EuiCard
                    icon={<EuiIcon type="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMiIgYmFzZVByb2ZpbGU9InRpbnkiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiCgkgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggZD0iTTQ4NC4xLDI2My44bDQuOC03LjhsLTQuOC03LjhjLTAuOC0xLjMtMjAuMS0zMi41LTU3LjYtNjMuN2MtNDkuOS00MS41LTEwOC43LTYzLjUtMTcwLTYzLjVjLTYxLjMsMC0xMjAuMiwyMS45LTE3MC40LDYzLjUKCWMtMzcuNywzMS4yLTU3LjMsNjIuNC01OC4xLDYzLjdMMjMsMjU2bDQuOSw3LjljMC44LDEuMywyMC4zLDMyLjUsNTguMSw2My43YzUwLjIsNDEuNSwxMDkuMSw2My41LDE3MC40LDYzLjUKCWM2MS4zLDAsMTIwLjEtMjIsMTcwLTYzLjVDNDY0LDI5Ni4zLDQ4My4zLDI2NS4xLDQ4NC4xLDI2My44eiBNNDA2LjUsMzA1LjJjLTQ0LjksMzcuMS05NS40LDU1LjktMTUwLDU1LjkKCWMtNTQuNywwLTEwNS4zLTE4LjgtMTUwLjUtNTUuOWMtMjMuNC0xOS4yLTM5LjItMzguNi00Ny00OS4xYzcuOC0xMC41LDIzLjYtMjkuOSw0Ny00OS4xYzQ1LjItMzcuMSw5NS44LTU1LjksMTUwLjUtNTUuOQoJYzU0LjcsMCwxMDUuMSwxOC44LDE1MCw1NS45YzIzLjMsMTkuMiwzOSwzOC43LDQ2LjYsNDkuMkM0NDUuNCwyNjYuNSw0MjkuNywyODUuOSw0MDYuNSwzMDUuMnoiLz4KPHBhdGggZD0iTTI1NiwxNjUuOWMtNDkuNywwLTkwLjEsNDAuNC05MC4xLDkwLjFzNDAuNCw5MC4xLDkwLjEsOTAuMXM5MC4xLTQwLjQsOTAuMS05MC4xUzMwNS43LDE2NS45LDI1NiwxNjUuOXogTTI1NiwzMTYuMQoJYy0zMy4yLDAtNjAuMS0yNy02MC4xLTYwLjFzMjctNjAuMSw2MC4xLTYwLjFzNjAuMSwyNyw2MC4xLDYwLjFTMjg5LjIsMzE2LjEsMjU2LDMxNi4xeiIvPgo8cGF0aCBmaWxsPSIjMjM4Rjg2IiBkPSJNMzAsMzBoNjIuNlYwSDB2OTEuNWgzMFYzMHoiLz4KPHBhdGggZmlsbD0iIzIzOEY4NiIgZD0iTTQxOS40LDB2MzBINDgydjYxLjVoMzBWMEg0MTkuNHoiLz4KPHBhdGggZmlsbD0iIzIzOEY4NiIgZD0iTTMwLDQyMC41SDBWNTEyaDkyLjZ2LTMwSDMwVjQyMC41eiIvPgo8cGF0aCBmaWxsPSIjMjM4Rjg2IiBkPSJNNDgyLDQ4MmgtNjIuNnYzMEg1MTJ2LTkxLjVoLTMwVjQ4MnoiLz4KPC9zdmc+Cg==" size="xl"/>}
                    title={'Visualization'}
                    description={'Click here to visualizate the file content without edit it.'}
                    onClick={() => this.renderVisualize.bind(this)}
                  />
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiCard
                    icon={<EuiIcon type="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMiIgYmFzZVByb2ZpbGU9InRpbnkiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiCgkgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MDEgNDAxIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggZD0iTTM3MC4xLDI1MS45Yy01LjUsMC0xMCw0LjUtMTAsMTB2ODguN2MwLDE2LjUtMTMuNCwyOS45LTMwLDMwSDQ5LjljLTE2LjUsMC0yOS45LTEzLjQtMzAtMzBWOTAuM2MwLTE2LjUsMTMuNC0yOS45LDMwLTMwCgloODguN2M1LjUsMCwxMC00LjUsMTAtMTBjMC01LjUtNC41LTEwLTEwLTEwSDQ5LjlDMjIuNCw0MC40LDAsNjIuNywwLDkwLjN2MjYwLjNjMCwyNy42LDIyLjQsNDkuOSw0OS45LDQ5LjloMjgwLjIKCWMyNy42LDAsNDkuOS0yMi40LDQ5LjktNDkuOXYtODguN0MzODAuMSwyNTYuNCwzNzUuNiwyNTEuOSwzNzAuMSwyNTEuOXoiLz4KPHBhdGggZmlsbD0iIzIzOEY4NiIgZD0iTTM3Ni4xLDE0LjdjLTE3LjYtMTcuNi00Ni0xNy42LTYzLjYsMEwxMzQuNCwxOTIuOWMtMS4yLDEuMi0yLjEsMi43LTIuNiw0LjRsLTIzLjQsODQuNgoJYy0xLDMuNSwwLDcuMiwyLjYsOS43YzIuNSwyLjUsNi4zLDMuNSw5LjcsMi42bDg0LjYtMjMuNGMxLjctMC41LDMuMi0xLjMsNC40LTIuNkwzODcuOSw5MGMxNy41LTE3LjYsMTcuNS00NiwwLTYzLjZMMzc2LjEsMTQuN3oKCSBNMTU2LjIsMTk5LjNMMzAyLDUzLjVsNDcsNDdMMjAzLjIsMjQ2LjRMMTU2LjIsMTk5LjN6IE0xNDYuOCwyMTguMmwzNy42LDM3LjZsLTUyLDE0LjRMMTQ2LjgsMjE4LjJ6IE0zNzMuNyw3NS44bC0xMC42LDEwLjYKCWwtNDctNDdsMTAuNi0xMC42YzkuNy05LjcsMjUuNi05LjcsMzUuMywwbDExLjcsMTEuN0MzODMuNSw1MC4zLDM4My41LDY2LjEsMzczLjcsNzUuOHoiLz4KPC9zdmc+Cg==" size="xl"/>}
                    title={'Edit'}
                    description={'Click here to edit the file content.'}
                    onClick={() => window.alert('Card clicked!')}
                  />
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiCard
                    icon={<EuiIcon type="createSingleMetricJob" size="xl"/>}
                    title={'Add service'}
                    description={'Click here to add a service at some equipment.'}
                    onClick={() => window.alert('Card clicked!')}
                  />
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiPageContentBody>
          </EuiPageContent>
        </EuiPageBody>
      </EuiPage>
    );
  }

  renderVisualize() {
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
