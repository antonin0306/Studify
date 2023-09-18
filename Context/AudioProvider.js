import React,{ Component, createContext} from 'react';
import { Texxt, View, StyleSheet } from 'react-native';
import * as MediaLibrary from 'expo-media-library';

export const AudioContext = createContext();

export class AudioProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            audioFiles: []
        }
    }

    getAudioFiles = async()=> {
        let media = MediaLibrary.getAssetsAsync({
            mediaType:"Audio"   
        })
        media = MediaLibrary.getAssetsAsync({
            mediaType:"Audio",
            first: media.totalCount

        })
        console.log(media)

        this.setState({...this.state,audioFiles:media.assets})
    }

    getPermission = async () => {
        const permission = await MediaLibrary.getPermissionAsync();
        console.log(permission);
        if (permission.granted) {
            this.getAudioFiles()
        }
        if (!permission.granted) {
            const{
                status,canAskAgain,
            } = await MediaLibrary.requestPermissionAsync();

            if (status ==='granted'){
                this.getAudioFiles();   
            }
        }
    }

    componentDidMount(){
        this.getPermission();
    }

    render() {
        return {

        }
    }
}
export default AudioProvider