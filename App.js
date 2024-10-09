import React from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Banner Section */}
      <View style={styles.banner}>
        <Image 
          style={styles.ellipse} 
          source={require('./assets/banner-background.png')} 
        />
        <View style={styles.statusBar}>
          <Text style={styles.timeText}>9:41</Text>
          <View style={styles.locationIcon} />
          <View style={styles.batteryContainer}>
            <View style={styles.batteryLevel} />
            <Text style={styles.batteryText}>32</Text>
          </View>
        </View>
      </View>

      {/* User Info and Notification */}
      <View style={styles.userInfoContainer}>
        <View style={styles.userInfo}>
          <Text style={styles.greetingText}>Selamat Pagi</Text>
          <Text style={styles.userName}>Bryan Hanggara</Text>
        </View>
        <View style={styles.notificationIcon}>
          <Image 
            style={styles.notificationBell} 
            source={{ uri: 'https://via.placeholder.com/22x17' }} 
          />
        </View>
      </View>

      {/* Faculty Information */}
      <View style={styles.facultyContainer}>
        <Text style={styles.facultyText}>
          Fakultas Ilmu Komputer{'\n'}Jurusan Sistem Informasi
        </Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <View style={styles.searchIcon}>
          <View style={styles.searchVector} />
        </View>
        <TextInput 
          placeholder="Apa yang kamu cari hari ini" 
          style={styles.searchInput} 
        />
      </View>

      {/* Feature Buttons */}
      <View style={styles.featureContainer}>
        <FeatureButton 
          label="Administrasi" 
          imageSource={require('./assets/administrasi.png')} 
        />
        <FeatureButton 
          label="Progress" 
          imageSource={require('./assets/progress.png')} 
        />
        <FeatureButton 
          label="Pengingat" 
          imageSource={require('./assets/pengingat.png')} 
        />
      </View>

      {/* Announcements */}
      <ScrollView style={styles.announcementContainer}>
        <Text style={styles.sectionTitle}>Pengumuman</Text>
        <AnnouncementCard 
          title="Persetujuan Pembimbing Kerja Praktik" 
          description="Berikut Adalah Hasil Pengumuman Pembimbing Kerja Praktik Yang Telah Disetujui Oleh Ketua Jurusan" 
        />
        <AnnouncementCard 
          title="Pengumpulan Surat Permohonan Izin Kerja Praktik" 
          description="Pengumpulan Surat Permohonan Izin Kerja Praktik Dimulai Dari Tanggal 1 Agustus 2024 - 31 Agustus 2024" 
        />
        <AnnouncementCard 
          title="Surat Izin Kerja Praktik" 
          description="Berikut Adalah Surat Izin Kerja Praktik Yang Telah Di Tanda Tangani Oleh Wakil Dekan Akademik" 
        />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <BottomNavigationButton label="Beranda" isSelected={true} />
        <BottomNavigationButton label="Lainnya" />
        <BottomNavigationButton label="Akademik" />
        <BottomNavigationButton label="Pesan" />
        <BottomNavigationButton label="Akun" />
      </View>
    </View>
  );
}

function FeatureButton({ label, imageSource }) {
  return (
    <TouchableOpacity style={styles.featureButton}>
      <Image source={imageSource} style={styles.featureIcon} />
      <Text style={styles.featureLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

function AnnouncementCard({ title, description }) {
  return (
    <View style={styles.announcementCard}>
      <Text style={styles.announcementTitle}>{title}</Text>
      <Text style={styles.announcementDescription}>{description}</Text>
      <TouchableOpacity style={styles.announcementButton}>
        <Text style={styles.buttonText}>Klik Disini</Text>
      </TouchableOpacity>
    </View>
  );
}

function BottomNavigationButton({ label, isSelected }) {
  return (
    <TouchableOpacity style={styles.bottomButton}>
      <View style={isSelected ? styles.selectedIcon : styles.icon} />
      <Text style={isSelected ? styles.selectedLabel : styles.label}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  banner: {
    width: '100%',
    height: 300,
    backgroundColor: '#3470A2',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  ellipse: {
    width: 300,
    height: 300,
    position: 'absolute',
    top: 2,
    left: 200,
    resizeMode: 'cover',
    opacity: 0.2, // Adjust opacity here
  },  
  statusBar: {
    width: '100%',
    height: 39,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  timeText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  locationIcon: {
    width: 14,
    height: 14,
    backgroundColor: 'white',
  },
  batteryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  batteryLevel: {
    width: 9.88,
    height: 14,
    backgroundColor: '#F7CE45',
  },
  batteryText: {
    color: 'white',
    fontSize: 11,
    fontWeight: 'bold',
  },
  userInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: -60,
  },
  userInfo: {
    flexDirection: 'column',
    marginTop: -90, // Move the text upwards by 10 pixels
  },
  
  greetingText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '700',
  },
  userName: {
    color: '#FFC727',
    fontSize: 20,
    fontWeight: '800',
  },
  notificationIcon: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 50,
  },
  notificationBell: {
    width: 22.27,
    height: 17.5,
  },
  facultyContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.48)',
    padding: 10, // Reduced padding to make it smaller
    position: 'absolute',
    top: 210, // Adjust this value to move it up or down
    left: 30, // Added left margin to make it smaller
    right: 0, // Added right margin to make it smaller
    height: 60, // Set a fixed height to make the container smaller
    width: 250, // Set a fixed width to control the size
    borderRadius: 30, // Adjusted border radius to fit the smaller size
    alignItems: 'center',
  },
  
  
  facultyText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 50,
    marginVertical: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    backgroundColor: '#8A8A8A',
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#8A8A8A',
  },
  featureContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  featureButton: {
    alignItems: 'center',
  },
  featureIcon: {
    width: 40,
    height: 40,
  },
  featureLabel: {
    marginTop: 5,
    color: '#5F5F61',
    fontSize: 14,
    textAlign: 'center',
  },
  announcementContainer: {
    paddingHorizontal: 20,
  },
  announcementCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 7,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  announcementTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  announcementDescription: {
    marginVertical: 5,
    fontSize: 12,
    color: '#666',
  },
  announcementButton: {
    backgroundColor: '#FFC727',
    borderRadius: 5,
    padding: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    padding: 10,
  },
  bottomButton: {
    alignItems: 'center',
  },
  selectedIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#FFC727',
  },
  icon: {
    width: 24,
    height: 24,
    backgroundColor: '#8C8994',
  },
  selectedLabel: {
    color: '#FFC727',
    fontSize: 10,
    fontWeight: '500',
  },
  label: {
    color: '#8C8994',
    fontSize: 10,
    fontWeight: '500',
  },
});

