import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Banner Section */}
      <View style={styles.banner}>
        {/* Status Bar */}
        <View style={styles.statusBar}>
          <Text style={styles.statusText}>9:41</Text>
          <View style={styles.statusIcons}>
            <Image style={styles.statusIcon} source={require('./assets/battery_icon.png')} />
            <Text style={styles.batteryText}>32</Text>
          </View>
        </View>

        {/* Back Button */}
        <TouchableOpacity style={styles.backButton}>
          <Image style={styles.backIcon} source={require('./assets/back_icon.png')} />
        </TouchableOpacity>

        {/* Center Circle and Text */}
        <View style={styles.circleContainer}>
          <View style={styles.circle}>
            <Image style={styles.calendarIcon} source={require('./assets/calendar_icon.png')} />
            <Text style={styles.bannerTitle}>Bimbingan</Text>
            <Text style={styles.bannerSubtitle}>Laporan Kerja Praktik</Text>
          </View>
        </View>
      </View>

      {/* Details Section */}
      <View style={styles.detailsContainer}>
        {/* Duration and Frequency */}
        <View style={styles.row}>
          <View style={styles.detailBox}>
            <Image style={styles.detailIcon} source={require('./assets/duration_icon.png')} />
            <Text style={styles.detailText}>1 Bulan</Text>
            <Text style={styles.detailLabel}>Durasi</Text>
          </View>
          <View style={styles.detailBox}>
            <Image style={styles.detailIcon} source={require('./assets/frequency_icon.png')} />
            <Text style={styles.detailText}>2 x Seminggu</Text>
            <Text style={styles.detailLabel}>Frekuensi</Text>
          </View>
        </View>

        {/* Category and Time */}
        <View style={styles.row}>
          <View style={styles.detailBox}>
            <Image style={styles.detailIcon} source={require('./assets/category_icon.png')} />
            <View style={styles.tags}>
              <Text style={styles.tag}>#Bimbingan</Text>
              <Text style={styles.tag}>#Laporan</Text>
            </View>
            <Text style={styles.detailLabel}>Kategori</Text>
          </View>
          <View style={styles.detailBox}>
            <Image style={styles.detailIcon} source={require('./assets/time_icon.png')} />
            <Text style={styles.detailText}>13:00 - 14:00</Text>
            <Text style={styles.detailLabel}>Jam</Text>
          </View>
        </View>

        {/* Location */}
        <Text style={styles.sectionTitle}>Lokasi</Text>
        <View style={styles.locationBox}>
          <Image style={styles.locationIcon} source={require('./assets/location_icon.png')} />
          <View>
            <Text style={styles.locationText}>Gedung Diklat Fasilkom Bukit</Text>
            <Text style={styles.locationSubtext}>Lantai 4, Ruangan Dosen</Text>
          </View>
        </View>

        {/* Notes */}
        <Text style={styles.sectionTitle}>Catatan</Text>
        <View style={styles.notesBox}>
          <TextInput style={styles.notesInput} placeholder="Tambah catatan disini..." placeholderTextColor="#8A8A8A" />
        </View>

        {/* Contact Section */}
        <Text style={styles.sectionTitle}>Kontak Dosen</Text>
        <View style={styles.contactRow}>
          <TouchableOpacity style={styles.contactButton}>
            <Image style={styles.contactIcon} source={require('./assets/whatsapp_icon.png')} />
            <Text style={styles.contactText}>Whatsapp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactButton}>
            <Image style={styles.contactIcon} source={require('./assets/phone_icon.png')} />
            <Text style={styles.contactText}>Telepon</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactButton}>
            <Image style={styles.contactIcon} source={require('./assets/email_icon.png')} />
            <Text style={styles.contactText}>Email</Text>
          </TouchableOpacity>
        </View>
      </View>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
    backgroundColor: '#3470A2',
    height: 244,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    position: 'relative',
    padding: 20,
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  statusText: {
    fontSize: 17,
    color: '#fff',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIcon: {
    width: 18,
    height: 18,
    marginRight: 5,
  },
  batteryText: {
    fontSize: 11,
    color: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: '#F7CE45',
    width: 42,
    height: 41,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: 23,
    height: 23,
  },
  circleContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  circle: {
    width: 190,
    height: 190,
    backgroundColor: '#63ABE6',
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
    top: 1,
  },
  calendarIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  bannerTitle: {
    color: '#000',
    fontSize: 20,
    fontWeight: '700',
  },
  bannerSubtitle: {
    color: '#8A8A8A',
    fontSize: 16,
    fontWeight: '400',
  },
  detailsContainer: {
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  detailBox: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#273B4A',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailIcon: {
    width: 24,
    height: 24,
    marginBottom: 10,
  },
  detailText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    marginBottom: 5,
  },
  detailLabel: {
    fontSize: 12,
    color: '#8A8A8A',
  },
  tags: {
    flexDirection: 'row',
  },
  tag: {
    backgroundColor: '#FFC727',
    padding: 5,
    borderRadius: 5,
    fontSize: 10,
    color: '#000',
    marginRight: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    marginBottom: 10,
  },
  locationBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    marginBottom: 20,
  },
  locationIcon: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
  locationText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  locationSubtext: {
    fontSize: 12,
    color: '#8A8A8A',
  },
  notesBox: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    marginBottom: 20,
  },
  notesInput: {
    fontSize: 14,
    color: '#8A8A8A',
  },
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  contactButton: {
    alignItems: 'center',
  },
  contactIcon: {
    width: 24,
    height: 24,
    marginBottom: 5,
  },
  contactText: {
    fontSize: 12,
    color: '#8A8A8A',
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
});

export default App;
