import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Day {
  day: string;
  date: string;
}

interface Places {
  booked: number;
  total: number;
}

interface SelectedDay {
  day: string;
  date: string;
  places: Places;
}

interface DateBarProps {
  daysOfWeek: string[];
  dates: string[];
  selectedDay: SelectedDay;
  handleSelectDay: (day: string, index: number) => void;
  setIsMapLaunched: (value: boolean) => void;
}

const DateBar: React.FC<DateBarProps> = ({
  daysOfWeek,
  dates,
  selectedDay,
  handleSelectDay,
  setIsMapLaunched,
}) => {
  const [selectedNewDay, setSelectedNewDay] = useState({ day: 'Monday', date: '17.03.2024' });
  const navigation = useNavigation();
  const handleBooking = () => {
    navigation.navigate('BookedMap', { selectedNewDay: { date: '13' } });
    setIsMapLaunched((prev) => !prev);
  };
  return (
    <View style={styles.dateBarContainer}>
      {/* Calendar Grid */}
      <View style={styles.calendarGrid}>
        {daysOfWeek.map((day, index) => (
          <TouchableOpacity
            key={index}
            style={styles.calendarDateContainer}
            onPress={() => handleSelectDay(day, index)}
          >
            <Text style={styles.dayOfWeek}>{day}</Text>
            <Text style={styles.dateText}>{dates[index]}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Selected Day Details */}
      <View style={styles.selectedDayDetails}>
        <View style={styles.textAndProgress}>
          <Text style={styles.selectedDayText}>
            {selectedDay.day} {selectedDay.date} places
          </Text>
          <View style={styles.progressBarContainer}>
            <View
              style={[
                styles.progressBarFilled,
                {
                  width: `${(selectedDay.places.booked / selectedDay.places.total) * 100}%`,
                },
              ]}
            />
          </View>
          <Text style={styles.placesCount}>
            {selectedDay.places.booked}/{selectedDay.places.total}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.bookButton}
          onPress={handleBooking}
        >
          <Text style={styles.bookButtonText}>Book</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#809E9F',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
      },
      dateLabel: {
        fontSize: 16,
        color: 'white',
      },
      dateText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
      },
      descriptionContainer: {
        backgroundColor: 'transparent',
        padding: 15,
        borderRadius: 5,
        marginBottom: 0,
      },
      descriptionText: {
        fontSize: 16,
        color: '#7A9EA0',
      },
      dateBarContainer: {
        backgroundColor: '#809E9F',
        borderRadius: 20,
        padding: 20,
        marginBottom: 20,
      },
      calendarGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 20,
      },
      calendarDateContainer: {
        width: '14.28%',
        alignItems: 'center',
        marginBottom: 10,
      },
      dayOfWeek: {
        color: '#D1D6D7',
        fontSize: 16,
        marginBottom: 5,
      },
      selectedDayDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#344E51',
        borderRadius: 10,
        padding: 15,
      },
      selectedDayText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
      },
      progressBarContainer: {
        width: 100,
        height: 10,
        backgroundColor: '#374049',
        borderRadius: 5,
        overflow: 'hidden',
      },
      progressBarFilled: {
        backgroundColor: '#7EB58A',
        height: '100%',
      },
      placesCount: {
        color: '#FFFFFF',
        fontSize: 16,
        marginLeft: 10,
      },
      bookButton: {
        backgroundColor: '#54666A',
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 20,
      },
      bookButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
      },
      descriptionTitle: {
        color: 'white',
        fontSize: 18,
        marginLeft: 12,
      },
});

export default DateBar;