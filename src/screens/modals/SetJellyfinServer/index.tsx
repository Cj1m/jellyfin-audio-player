import React, { useState, useCallback } from 'react';
import { Text, Button, View } from 'react-native';
import Modal from '../../../components/Modal';
import Input from '../../../components/Input';
import { setJellyfinCredentials } from '../../../store/settings/actions';
import { useDispatch } from 'react-redux';
import { useNavigation, StackActions } from '@react-navigation/native';
import CredentialGenerator from './components/CredentialGenerator';

export default function SetJellyfinServer() {
    // State for first screen
    const [serverUrl, setServerUrl] = useState<string>();
    const [isLogginIn, setIsLogginIn] = useState<boolean>(false);

    // Handlers needed for dispatching stuff
    const dispatch = useDispatch();
    const navigation = useNavigation();

    // Save creedentials to store and close the modal
    const saveCredentials = useCallback((credentials) => {
        dispatch(setJellyfinCredentials(credentials));
        navigation.dispatch(StackActions.popToTop());    
    }, [navigation, dispatch]);

    return (
        <Modal>
            {isLogginIn ? (
                <CredentialGenerator 
                    serverUrl={serverUrl as string}
                    onCredentialsRetrieved={saveCredentials}
                />
            ) : (
                <View style={{ padding: 20}}>
                    <Text>Please enter your Jellyfin server URL first. Make sure to include the protocol and port</Text>
                    <Input
                        placeholder="https://jellyfin.yourserver.io/"
                        onChangeText={setServerUrl}
                        value={serverUrl} 
                        keyboardType="url"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <Button title="Set server" onPress={() => setIsLogginIn(true)} disabled={!serverUrl?.length} />
                </View>
            )}
        </Modal>
    );
}