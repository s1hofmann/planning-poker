import React, { Component } from "react";
import classNames from "classnames";
import { TopBar } from "./TopBar";
import "./SettingsView.css";

export class SettingsView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            settings: this.props.settings
        };
    }

    changeForegroundColor = (event) => {
        const settings = {...this.state.settings};
        settings.foregroundColor.value = event.target.value;
        this.propagateNewSettings(settings);
    };

    changeBackgroundColor = (event) => {
        const settings = {...this.state.settings};
        settings.backgroundColor.value = event.target.value;
        this.propagateNewSettings(settings);
    };

    propagateNewSettings(settings) {
        this.setState({settings: settings});
        this.props.onChangeSetting(this.state.settings);
    }

    render() {
        return (
            <div className={classNames("cardGridView")}>
                <TopBar
                    left={
                        <div
                            className={classNames("text-left", "back")}
                            onClick={this.props.onCloseSettings}
                        >
                            {"< Back"}
                        </div>
                    }
                    center={
                        <div className={classNames("text-centered", "title")}>
                            {"Settings"}
                        </div>
                    }
                />
                <div className={classNames("settings")}>
                    <table>
                        <tbody>
                            <Setting onChangeSetting={this.changeForegroundColor}
                                     setting={this.state.settings.foregroundColor}/>
                            <Setting onChangeSetting={this.changeBackgroundColor}
                                     setting={this.state.settings.backgroundColor}/>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

class Setting extends Component {

    propValue() {
        return this.props.setting.value.trim() !== "" ?
                this.props.setting.value : this.props.setting.default;
    }

    render() {
        return (
            <tr>
                <td>
                    <h3>{this.props.setting.name}:</h3>
                </td>
                <td>
                    <input onChange={this.props.onChangeSetting}
                           defaultValue={this.propValue()}/>
                </td>
            </tr>
        )
    }
}