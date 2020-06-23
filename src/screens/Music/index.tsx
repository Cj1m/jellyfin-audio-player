import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StackParams } from './types';
import Albums from './stacks/Albums';
import Album from './stacks/Album';
import RecentAlbums from './stacks/RecentAlbums';

const Stack = createStackNavigator<StackParams>();

function MusicStack() {
    return (
        <Stack.Navigator initialRouteName="RecentAlbums">
            <Stack.Screen name="RecentAlbums" component={RecentAlbums} options={{ headerTitle: 'Recent Albums' }} />
            <Stack.Screen name="Albums" component={Albums} />
            <Stack.Screen name="Album" component={Album} />
        </Stack.Navigator>
    );
}

export default MusicStack;