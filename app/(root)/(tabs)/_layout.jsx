import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
    return (
        <NativeTabs>

            <NativeTabs.Trigger name="index">
                <Icon md="home" />
                <Label>Home</Label>
            </NativeTabs.Trigger>

            <NativeTabs.Trigger name="search">
                <Icon md="search" />
                <Label>Search</Label>
            </NativeTabs.Trigger>

            <NativeTabs.Trigger name="save">
                <Icon md="bookmark" />
                <Label>Save</Label>
            </NativeTabs.Trigger>

            <NativeTabs.Trigger name="profile">
                <Icon md="person" />
                <Label>Profile</Label>
            </NativeTabs.Trigger>

        </NativeTabs>
    );
}