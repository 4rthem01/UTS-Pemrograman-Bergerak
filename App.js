import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      
      {/* Back Button in Top-Left Corner */}
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>{'<'}</Text>
      </TouchableOpacity>

      {/* Top Section - Calendar */}
      <View style={styles.calendarContainer}>
        <View style={styles.calendar}>
          <View style={styles.calendarHeader}>
            <TouchableOpacity style={styles.calendarArrow}>
              <Text>{'<'}</Text>
            </TouchableOpacity>
            <Text style={styles.monthText}>Agustus 2024</Text>
            <TouchableOpacity style={styles.calendarArrow}>
              <Text>{'>'}</Text>
            </TouchableOpacity>
          </View>

          {/* Calendar Dates */}
          <View style={styles.datesContainer}>
            {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day, index) => (
              <View key={index} style={styles.dateColumn}>
                <Text style={styles.dayText}>{day}</Text>
                {/* Mock Dates */}
                {[1, 8, 15, 22, 29].map((date, i) => (
                  <Text key={i} style={date === 15 || date === 17 ? styles.selectedDate : styles.dateText}>
                    {date}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Middle Section - Today's Tasks */}
      <ScrollView style={styles.taskSection}>
        <Text style={styles.todayText}>Hari Ini</Text>

        {/* Timeline */}
        <View style={styles.timelineItem}>
          <Text style={styles.timeLabel}>13:00</Text>
          <View style={styles.taskCard}>
            <Text style={styles.taskTitle}>Bimbingan Laporan KP</Text>
            <Text style={styles.taskCategory}>Kategori: #Bimbingan #Laporan</Text>
          </View>
        </View>

        <View style={styles.timelineItem}>
          <Text style={styles.timeLabel}>15:00</Text>
          <View style={styles.taskCard}>
            <Text style={styles.taskTitle}>Sharing Session</Text>
            <Text style={styles.taskCategory}>Kategori: #Magang</Text>
          </View>
        </View>
      </ScrollView>

      {/* Floating Add Button */}
      <TouchableOpacity style={styles.floatingButton}>
        <Text style={styles.plusSign}>+</Text>
      </TouchableOpacity>

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
    backgroundColor: '#346CA2', // The same blue color throughout the entire app
  },
  // Back Button styling
  backButton: {
    position: 'absolute',
    top: 76, // Adjust this value if needed
    left: 20, // Adjust this value to fine-tune its position
    backgroundColor: '#F7CE45', // Yellow background
    padding: 10,
    borderRadius: 360,
    zIndex: 10, // Make sure it's on top of other components
  },
  backButtonText: {
    fontSize: 18,
    color: '#346CA2', // Blue text for contrast
    fontWeight: 'bold',
  },
  calendarContainer: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    marginTop: 70, // Moves the calendar down by adding margin
  },
  calendar: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  calendarArrow: {
    padding: 10,
  },
  monthText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  datesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateColumn: {
    alignItems: 'center',
  },
  dayText: {
    fontSize: 12,
    color: '#555',
    marginBottom: 5,
  },
  dateText: {
    fontSize: 14,
    color: 'black',
    marginBottom: 10,
  },
  selectedDate: {
    fontSize: 14,
    color: 'black',
    marginBottom: 10,
    backgroundColor: '#FFC727',
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  taskSection: {
    flex: 1,
    paddingHorizontal: 20,
  },
  todayText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    marginBottom: 20,
  },
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  timeLabel: {
    fontSize: 12,
    color: 'black',
    opacity: 0.5,
    width: 60,
  },
  taskCard: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
  },
  taskTitle: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 5,
  },
  taskCategory: {
    fontSize: 10,
    color: '#FFC727',
  },
  floatingButton: {
    position: 'absolute',
    right: 20,
    bottom: 100,
    width: 60,
    height: 60,
    backgroundColor: '#143C5E',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusSign: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#8C8994',
  },
  navTextActive: {
    fontSize: 12,
    color: '#FFC727',
  },
});

export default App;
