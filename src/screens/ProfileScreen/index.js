import {
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import BasicNecessity from '../../components/BasicNecessity';
import { ImageProfileName, Items } from './constants';
import OrderCouponsHelp from '../../components/OrdersCouponsHelp';
import ExtraFeatures from '../../components/ExtraFeatures';
import FAQAndMoreInfo from '../../components/FAQAndMoreInfo';

const Profile = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollView}
    >
      <View style={styles.ImageText}>
        <Image
          source={require('../../assets/Image.jpg')}
          style={styles.image}
        />
        <View style={styles.textOnImage}>
          <Text style={styles.ProfileText}>{ImageProfileName}</Text>
          <Text style={styles.DescText}>
            Become an Insider to Avail Extra Rewards and Better Discounts !
          </Text>
          <TouchableOpacity
            style={styles.knowMoreButton}
            onPress={() => console.log('KnowMorePressed')}
          >
            <Text style={styles.knowMoreText}>Know More</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.Profiles}>
        <Text>Shopping for </Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.BasicNecessity}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {Items.map((item, index) => {
          return <BasicNecessity key={index} item={item} />;
        })}
      </ScrollView>

      <OrderCouponsHelp />

      <ExtraFeatures />

      <View style={styles.blankField}></View>

      <FAQAndMoreInfo />

      <TouchableOpacity style={styles.LogOutButton}>
        <Text style={styles.logOutText}>LOG OUT</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingBottom: 200,
  },
  ImageText: {
    position: 'relative',
    maxHeight: 100,
  },
  textOnImage: {
    position: 'absolute',
    width: '50%',
    justifyContent: 'space-around',
    marginLeft: 5,
    minHeight: 100,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  ProfileText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  DescText: {
    fontSize: 12,
    color: 'white',
  },
  knowMoreButton: {
    backgroundColor: '#dcb124a8',
    width: '50%',
    borderRadius: 5,
  },
  knowMoreText: {
    alignSelf: 'center',
    color: 'white',
  },
  BasicNecessity: {
    gap: 10,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#c8c7c7',
  },
  blankField: {
    width: '100%',
    backgroundColor: '#c8c7c7',
    height: 30,
  },
  LogOutButton: {
    borderWidth: 1,
    borderColor: 'red',
    width: 400,
    height: 45,
    margin: 10,
  },
  logOutText: {
    fontSize: 17,
    color: 'red',
    textAlign: 'center',
    top:10,
    fontWeight:'bold'
  },
});

export default Profile;
