import { createDrawerNavigator } from '@react-navigation/drawer';
import FeedScreen from '../screens/FeedScreen';
import ArticleScreen from '../screens/ArticleScreen';
import SidebarScreen from '../screens/SidebarScreen';
import Dashboard from '../screens/DashboardScreen';
import BottomTabNavigation from './BottomTabNavigation';
import Article from '../screens/ArticleScreen';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
    return (
        <Drawer.Navigator drawerContent={props => <SidebarScreen {...props} />} screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="MainTab" component={BottomTabNavigation} />
            <Drawer.Screen name="Feed" component={FeedScreen} />
            <Drawer.Screen name="Article" component={Article} />
        </Drawer.Navigator>
    );
}
export default MyDrawer