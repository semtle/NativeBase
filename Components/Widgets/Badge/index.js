/* @flow */
'use strict';

import React from 'react';
import {View,Platform} from 'react-native';
import NativeBaseComponent from '../../Base/NativeBaseComponent';
import computeProps from '../../../Utils/computeProps';
import Text from './../Text';


export default class BadgeNB extends NativeBaseComponent {

    static propTypes = {
        style : React.PropTypes.object
    }

    prepareRootProps() {

        var type = {

            backgroundColor:this.props.primary ?
                            this.getTheme().brandPrimary :
                            this.props.success ?
                            this.getTheme().brandSuccess :
                            this.props.info ?
                            this.getTheme().brandInfo :
                            this.props.warning ?
                            this.getTheme().brandWarning :
                            this.props.danger ?
                            this.getTheme().brandDanger :
                            this.getTheme().badgeBg,
            padding: (Platform.OS === 'ios') ? 3 : 0,
            paddingHorizontal: 10,
            alignSelf: 'flex-start',
            borderRadius: 13.5,
            height: 27

        }

        var defaultProps = {
            style: type
        }

        return computeProps(this.props, defaultProps);

    }
    render() {
        return(
            <View ref={c => this._root = c} {...this.prepareRootProps()}>
                <Text style={[ this.props.textStyle, {
                                color: 'red',
                                fontSize: (this.props.textStyle && this.props.textStyle.fontSize) ? this.props.textStyle.fontSize : this.getTheme().fontSizeBase,
                                lineHeight: (this.props.textStyle && this.props.textStyle.lineHeight) ? this.props.textStyle.lineHeight : this.getTheme().lineHeight-1,
                                textAlign: 'center'
                            } ]}>{this.props.children}
                </Text>
            </View>
        );
    }

}