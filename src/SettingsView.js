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

    changeForegroundToDefault = () => {
        const settings = {...this.state.settings};
        settings.foregroundColor.value = this.props.settings.foregroundColor.default;
        this.propagateNewSettings(settings);
    };

    changeBackgroundToDefault = () => {
        const settings = {...this.state.settings};
        settings.backgroundColor.value = this.props.settings.backgroundColor.default;
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
                                     onSetDefault={this.changeForegroundToDefault}
                                     setting={this.state.settings.foregroundColor}/>
                            <Setting onChangeSetting={this.changeBackgroundColor}
                                     onSetDefault={this.changeBackgroundToDefault}
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
                    <p>{this.props.setting.name}:</p>
                </td>
                <td>
                    <input type="color"
                           onChange={this.props.onChangeSetting}
                           value={this.propValue()}/>
                </td>
                <td onClick={this.props.onSetDefault}>&#8634;</td>
            </tr>
        )
    }
}