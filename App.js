import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Banner Section */}
      <View style={styles.banner}>
        <View style={styles.ellipse} />
        {/* Status Bar (Mockup) */}
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
          <Text style={styles.welcomeText}>Selamat Datang Di Pengingat</Text>
          <Text style={styles.username}>Bryan Hanggara</Text>
        </View>
        <View style={styles.priorityContainer}>
          <View style={styles.taskCardHeader}>
            <Text style={styles.taskTitle}>Bimbingan Laporan KP</Text>
            <Text style={styles.priority}>*Prioritas</Text>
          </View>
          <Text style={styles.taskTime}>Hari ini pukul 13:00</Text>
          <Text style={styles.categoryText}>
            Kategori: <Text style={styles.category}>#Bimbingan</Text> <Text style={styles.category}>#Laporan</Text>
          </Text>
        </View>
        <TouchableOpacity style={styles.notificationIcon}>
          <View style={styles.doubleArrowLeft}></View>
        </TouchableOpacity>
      </View>

      {/* Today's Schedule */}
      <Text style={styles.sectionTitle}>Jadwal Hari ini</Text>

      <ScrollView>
        {/* Task 1 */}
        <View style={styles.taskCard}>
          <View style={styles.taskCardHeader}>
            <Text style={styles.taskTitle}>Rapat Perusahaan</Text>
            <Image style={styles.checkIcon} source={{ uri: 'https://via.placeholder.com/18' }} />
          </View>
          <Text style={styles.taskTime}>Hari ini pukul 09:00</Text>
          <View style={styles.taskFooter}>
            <View style={styles.timeIcon}>
              <Image style={styles.timeIconImage} source={{ uri: 'https://via.placeholder.com/12' }} />
            </View>
            <Text style={styles.taskStatusText}>Sudah dilakukan pukul 09:20</Text>
          </View>
        </View>

        {/* Task 2 */}
        <View style={styles.taskCard}>
          <View style={styles.taskCardHeader}>
            <Text style={styles.taskTitle}>Bimbingan Laporan KP</Text>
            <View style={styles.roundIcon}></View>
          </View>
          <Text style={styles.taskTime}>Hari ini pukul 13:00</Text>
        </View>

        {/* Task 3 */}
        <View style={styles.taskCard}>
          <View style={styles.taskCardHeader}>
            <Text style={styles.taskTitle}>Sharing Session</Text>
            <View style={styles.roundIcon}></View>
          </View>
          <Text style={styles.taskTime}>Hari ini pukul 16:00</Text>
        </View>
      </ScrollView>

      {/* Tomorrow's Schedule */}
      <Text style={styles.sectionTitle}>Jadwal Besok</Text>

      <ScrollView>
        {/* Task 4 */}
        <View style={styles.taskCard}>
          <View style={styles.taskCardHeader}>
            <Text style={styles.taskTitle}>Revisi Database</Text>
            <View style={styles.roundIcon}></View>
          </View>
          <Text style={styles.taskTime}>Besok pukul 09:00</Text>
        </View>

        {/* Task 5 */}
        <View style={styles.taskCard}>
          <View style={styles.taskCardHeader}>
            <Text style={styles.taskTitle}>Rapat Magang</Text>
            <View style={styles.roundIcon}></View>
          </View>
          <Text style={styles.taskTime}>Besok pukul 13:00</Text>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navTextActive}>Beranda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Lainnya</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Akademik</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Pesan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Akun</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const { width } = Dimensions.get('window');

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
  priorityContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 15,
    marginTop: 20,
  },
  taskTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000',
  },
  priority: {
    fontSize: 12,
    color: '#9F0202',
    fontWeight: '400',
  },
  taskTime: {
    fontSize: 10,
    color: '#000',
    opacity: 0.5,
  },
  categoryText: {
    fontSize: 10,
    color: '#000',
    opacity: 0.5,
  },
  category: {
    color: '#FFC727',
    fontWeight: '500',
  },
  taskCard: {
    backgroundColor: '#FFF9E9',
    borderColor: '#3470A2',
    borderWidth: 1,
    borderRadius: 20,
    padding: 15,
    marginHorizontal: 36,
    marginBottom: 15,
  },
  taskCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  taskStatusText: {
    fontSize: 10,
    color: '#000',
  },
  timeIcon: {
    width: 20,
    height: 20,
    backgroundColor: '#FFC727',
    borderRadius: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeIconImage: {
    width: 12,
    height: 12,
  },
  checkIcon: {
    width: 18,
    height: 18,
  },
  roundIcon: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#222222',
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
  navText: {
    fontSize: 10,
    color: '#8C8994',
  },
  navTextActive: {
    fontSize: 10,
    color: '#FFC727',
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: '500',
    marginHorizontal: 28,
    marginTop: 20,
    color: '#000',
  },
});

export default App;