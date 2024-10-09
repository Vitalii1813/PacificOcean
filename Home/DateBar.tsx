import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Define props interface
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
  selectedDay: SelectedDay | null; // Accept selectedDay as a prop
  handleSelectDay: (day: string, index: number) => void;
  setIsMapLaunched: (value: boolean) => void;
  previousDay: SelectedDay | null; // Accept previousDay as a prop
}

const DateBar: React.FC<DateBarProps> = ({
  daysOfWeek,
  dates,
  selectedDay,
  handleSelectDay,
  setIsMapLaunched,
  previousDay,
}) => {

  const handleDayPress = (day: string, index: number) => {
    // Call the parent handler to update selected day
    handleSelectDay(day, index);
  };

  return (
    <View style={styles.dateBarContainer}>
      {/* Calendar */}
      <View style={styles.calendarGrid}>
        {daysOfWeek.map((day, index) => (
          <TouchableOpacity
            key={index}
            style={styles.calendarDateContainer}
            onPress={() => handleDayPress(day, index)}
          >
            <Text style={styles.dayOfWeek}>{day}</Text>
            <Text style={styles.dateText}>{dates[index]}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Display selected day details */}
      {selectedDay && (
        <View style={styles.selectedDayDetails}>
          <Text style={styles.selectedDayText}>
            Booked on {selectedDay.day} {selectedDay.date}
          </Text>
          {/* Add any other details you want to display */}
        </View>
      )}

      {/* Previous Booking info */}
      {previousDay && (
        <Text style={styles.previousBookingText}>
          Previous Booking: {previousDay.day} {previousDay.date} {previousDay.places.booked}/{previousDay.places.total}
        </Text>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
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
  dateText: {
    color: '#D1D6D7',
    fontSize: 14,
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
  previousBookingText: {
    marginTop: 10,
    color: '#D1D6D7',
    fontSize: 14,
  },
});

export default DateBar;