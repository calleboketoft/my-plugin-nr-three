import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-plugin-nr-three',
  styleUrl: 'my-plugin-nr-three.css',
  shadow: true
})
export class MyPluginNrThree {

  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <div>
        Hello, World! I'm {this.first} {this.last}
      </div>
    );
  }
}
