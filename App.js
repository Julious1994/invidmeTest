import React from 'react';
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import imageMapper from './images/imageMapper';

const list = [
  {title: 'Amit Flexy', name: 'Amit', other: 'chains'},
  {title: 'Shane Watson', name: 'Shane Watson', other: 'chains'},
  {title: 'Joe root', name: 'Joe root', other: 'chains'},
  {title: 'Jack Rich', name: 'Jack rich', other: 'chains'},
];

class App extends React.Component {
  renderItem = ({item}) => (
    <View style={styles.userProfileItem}>
      <View style={styles.userPic}>
        <Image
          source={imageMapper.profileBackground.source}
          style={styles.userImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.userInfo}>
        <View style={styles.userTitleView}>
          <Text style={styles.userTitle}>{item.title}</Text>
          <Image style={styles.editImage} source={imageMapper.edit.source} />
        </View>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.userOther}>{item.other}</Text>
      </View>
      <View style={styles.userRightAction}>
        <View style={styles.userAction}>
          <TouchableOpacity style={styles.userActionButton}>
            <Image
              resizeMode="contain"
              style={styles.iconImage}
              source={imageMapper.video.source}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.userActionButton}>
            <Image
              style={styles.iconImage}
              resizeMode="contain"
              source={imageMapper.roseProfile.source}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  renderAccountInfo = () => {
    return (
      <View style={styles.accountInfoContainer}>
        <View style={styles.userPic}>
          <Image
            source={imageMapper.profileBackground.source}
            style={styles.accountImage}
          />
        </View>
        <View style={styles.accountInfo}>
          <Text style={styles.accountTitle}>Xavier Sotomayor</Text>
          <Text style={styles.accountTag}>@goodboy</Text>
          <View style={styles.accountFollow}>
            <Text style={styles.countTitle}>Videos: </Text>
            <Text style={styles.count}> 72</Text>
            <Text style={styles.countTitle}>Fans: </Text>
            <Text style={styles.count}>0</Text>
          </View>
        </View>
        <View style={styles.accountActionContainer}>
          <View style={styles.accountAction}>
            <TouchableOpacity style={styles.accountActionButton}>
              <Image
                resizeMode="contain"
                style={styles.accountActionIcon}
                source={imageMapper.book.source}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.accountActionButton}>
              <Image
                resizeMode="contain"
                style={styles.accountActionIcon}
                source={imageMapper.share.source}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <ImageBackground
        style={styles.container}
        resizeMode="stretch"
        source={imageMapper.profileBackground.source}>
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.content}>
            <View style={styles.headerContainer}>
              <View style={styles.leftHeader}>
                <TouchableOpacity style={styles.infoButton}>
                  <Image
                    source={imageMapper.info.source}
                    style={styles.accountActionIcon}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.middleHeader}>
                <Text style={styles.headerTitle}>PROFILE</Text>
              </View>
              <View style={styles.rightHeader}>
                <TouchableOpacity style={styles.rightHeaderAction}>
                  <Image
                    style={styles.iconImage}
                    source={imageMapper.search.source}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.rightHeaderAction}>
                  <Image
                    style={styles.iconImage}
                    source={imageMapper.settings.source}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {this.renderAccountInfo()}
            <View>
              <FlatList
                data={list}
                keyExtractor={(item, i) => `${i}`}
                renderItem={this.renderItem}
              />
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  headerContainer: {display: 'flex', flexDirection: 'row'},
  leftHeader: {width: 50},
  middleHeader: {flex: 1, alignItems: 'center'},
  rightHeader: {display: 'flex', flexDirection: 'row'},
  rightHeaderAction: {
    paddingRight: 10,
  },
  accountImage: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: '#FFF',
    borderRadius: 10,
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '500',
  },
  accountInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 25,
    paddingBottom: 20,
    borderBottomWidth: 0.2,
    borderBottomColor: 'gray',
  },
  accountInfo: {
    paddingLeft: 20,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  accountActionButton: {
    paddingLeft: 10,
  },
  accountActionIcon: {
    width: 24,
    height: 24,
  },
  accountTitle: {
    color: '#FFF',
    fontSize: 20,
  },
  accountTag: {
    color: '#FFF',
    paddingTop: 5,
  },
  accountFollow: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 5,
  },
  countTitle: {
    color: '#FFF',
  },
  count: {
    color: 'orange',
    marginRight: 10,
  },
  accountAction: {
    display: 'flex',
    flexDirection: 'row',
  },
  accountActionContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  userProfileItem: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  userPic: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: '#FFF',
    borderRadius: 10,
  },
  userImage: {
    width: 60,
    height: 60,
  },
  userRightAction: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  userInfo: {
    flex: 1,
    paddingLeft: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  userTitleView: {
    display: 'flex',
    flexDirection: 'row',
  },
  userTitle: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  editImage: {
    width: 18,
    height: 18,
    marginLeft: 10,
  },
  userName: {
    color: 'gray',
  },
  userOther: {
    color: 'gray',
  },
  userAction: {
    display: 'flex',
    flexDirection: 'row',
  },
  userActionButton: {
    paddingLeft: 15,
  },
  iconImage: {
    width: 24,
    height: 24,
  },
});

export default App;
