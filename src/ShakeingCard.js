import { Card } from "./Card";
import { Seismograph } from "device-motion";

export class ShakeingCard extends Card {
  constructor(props) {
    super(props);
    this.seismograph = null;
  }

  componentDidMount() {
    if (this.props.isFlippable) {
      this.seismograph = new Seismograph({
        minShakes: this.props.minShakes || 5,
        onShake: this.flip,
        delay: this.props.delay || 1500
      });
      this.seismograph.startRecording();
    }
  }

  componentWillUnmount() {
    if (this.seismograph) {
      this.seismograph.stopRecording();
    }
  }

  render() {
    return super.render();
  }
}
