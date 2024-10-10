import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Banner Section */}
      <View style={styles.banner}>
        <View style={styles.ellipse} />
        {/* Status Bar */}
        <View style={styles.statusBar}>
          <View style={styles.leftStatus}>
            <Text style={styles.statusText}>9:41</Text>
            <View style={styles.locationIndicator}></View>
          </View>
          <View style={styles.rightStatus}>
            <View style={styles.networkSignal}></View>
            <View style={styles.battery}>
              <View style={styles.batteryFill}></View>
              <Text style={styles.batteryText}>32</Text>
            </View>
          </View>
        </View>
        {/* Profile Section */}
        <View style={styles.profileContainer}>
          <Text style={styles.welcomeText}>Selamat Datang Di Progress</Text>
          <Text style={styles.username}>Bryan Hanggara</Text>
        </View>
        {/* Search Box */}
        <View style={styles.searchBox}>
          <TextInput style={styles.searchInput} placeholder="Apa yang kamu cari hari ini" placeholderTextColor="#8A8A8A" />
        </View>
        {/* Notification Icon */}
        <TouchableOpacity style={styles.notificationIcon}>
          <View style={styles.doubleArrowLeft}></View>
        </TouchableOpacity>
      </View>

      {/* Progress Section */}
      <View style={styles.progressContainer}>
        <Text style={styles.dearText}>Dear Bryan,</Text>
        <Text style={styles.progressText}>Jangan Lupa Untuk Selalu Cek Progress Bimbingan Mu Ya</Text>
        <View style={styles.progressBackground}>
          <View style={styles.progressBar}></View>
          <Text style={styles.emoji}>😄</Text>
        </View>
      </View>

      {/* Task List */}
      <ScrollView style={styles.taskList}>
        <Text style={styles.sectionTitle}>Bimbingan Kerja Praktik</Text>

        {/* Task 1 */}
        <View style={styles.taskItem}>
          <Text style={styles.taskText}>Bimbingan Topik Kerja Praktik</Text>
          <Image style={styles.checkImage} source={require('./assets/check_icon.png')} />
        </View>

        {/* Task 2 */}
        <View style={styles.taskItem}>
          <Text style={styles.taskText}>Bimbingan Proposal Dan Tempat Kerja Praktik</Text>
          <Image style={styles.checkImage} source={require('./assets/check_icon.png')} />
        </View>

        {/* Task 3 */}
        <View style={styles.taskItem}>
          <Text style={styles.taskText}>Bimbingan Formulir Kegiatan</Text>
          <Image style={styles.checkImage} source={require('./assets/check_icon.png')} />
        </View>

        {/* Task 4 */}
        <View style={styles.taskItem}>
          <Text style={styles.taskText}>Bimbingan Laporan Kerja Praktik</Text>
        </View>

        {/* Task 5 */}
        <View style={styles.taskItem}>
          <Text style={styles.taskText}>Bimbingan Revisi Laporan Kerja Praktik Akhir</Text>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.navIcon}></View>
          <Text style={styles.navTextActive}>Beranda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.navIconInactive}></View>
          <Text style={styles.navText}>Lainnya</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.navIconInactive}></View>
          <Text style={styles.navText}>Akademik</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.navIconInactive}></View>
          <Text style={styles.navText}>Pesan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.navIconInactive}></View>
          <Text style={styles.navText}>Akun</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
    backgroundColor: '#3470A2',
    height: 230,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    position: 'relative',
    padding: 20,
  },
  ellipse: {
    width: 210, // Adjusted size for smaller circle
    height: 210,
    backgroundColor: '#63ABE6',
    borderRadius: 9999,
    position: 'absolute',
    top: 10,
    right: -60, // Adjusted to move the circle closer
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 39,
  },
  leftStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 17,
    color: '#fff',
    marginRight: 10,
  },
  locationIndicator: {
    width: 14,
    height: 14,
    backgroundColor: '#fff',
    borderRadius: 7,
  },
  rightStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  networkSignal: {
    width: 20,
    height: 12,
    backgroundColor: '#fff',
    opacity: 0.5,
    marginRight: 10,
  },
  battery: {
    width: 27,
    height: 14,
    backgroundColor: '#fff',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  batteryFill: {
    width: 10,
    height: '100%',
    backgroundColor: '#F7CE45',
  },
  batteryText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '700',
    position: 'absolute',
    right: 5,
  },
  profileContainer: {
    marginTop: 20,
  },
  welcomeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },
  username: {
    color: '#FFC727',
    fontSize: 20,
    fontWeight: '800',
  },
  searchBox: {
    backgroundColor: '#fff',
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    color: '#8A8A8A',
    fontSize: 14,
    fontFamily: 'Outfit',
  },
  notificationIcon: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: '#F7CE45',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  doubleArrowLeft: {
    width: 10,
    height: 20,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#3470A2',
    transform: [{ rotate: '45deg' }],
  },
  progressContainer: {
    marginHorizontal: 29,
    marginTop: 10,
    backgroundColor: '#63ABE6',
    borderRadius: 30,
    padding: 15,
    elevation: 5,
  },
  dearText: {
    color: '#fff',
    fontSize: 13,
 
  },
  progressText: {
    color: '#fff',
    fontSize: 7,
    marginTop: 10,
  },
  progressBackground: {
    height: 15,
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    marginTop: 10,
    position: 'relative',
  },
  progressBar: {
    width: '60%', // This simulates the progress (adjust as necessary)
    height: '100%',
    backgroundColor: '#FFD358',
    borderRadius: 15,
  },
  emoji: {
    position: 'absolute',
    right: 5, // Positioned at the end of the progress bar
    top: -2, // Slightly elevated to fit in the progress bar
    fontSize: 16,
  },
  taskList: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#002649',
    marginBottom: 15,
  },
  taskItem: {
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#000',
  },
  checkImage: {
    width: 18,
    height: 18,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#D9D9D9',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#FFC727',
  },
  navIconInactive: {
    width: 24,
    height: 24,
    backgroundColor: '#8C8994',
  },
  navText: {
    fontSize: 10,
    color: '#8C8994',
  },
  navTextActive: {
    fontSize: 10,
    color: '#FFC727',
  },
});

export default App;
