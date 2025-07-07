import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Ionicons name="menu" size={26} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Home</Text>
        <View style={styles.headerRight}>
          <MaterialCommunityIcons name="star" size={20} color="#fff" />
          <Text style={styles.headerRightText}>x4</Text>
          <MaterialCommunityIcons name="crown" size={24} color="orange" style={{ marginLeft: 8 }} />
        </View>
      </View>

      {/* Premium Banner */}
      <Text style={styles.premiumText}>Get Premium Now!</Text>

      {/* Camera & Gallery Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#4A90E2' }]}>
          <Ionicons name="camera" size={24} color="#fff" />
          <Text style={styles.buttonText}>Camera</Text>
          <Ionicons name="chevron-forward" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { backgroundColor: '#00BBD3' }]}>
          <Ionicons name="image" size={24} color="#fff" />
          <Text style={styles.buttonText}>Gallery</Text>
          <Ionicons name="chevron-forward" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* All Files */}
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <View style={styles.fileCard}>
          <Text style={styles.fileText}>All Files</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: '#EF156F',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRightText: {
    color: '#fff',
    marginLeft: 4,
    fontWeight: 'bold',
  },
  premiumText: {
    color: '#007BFF',
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    width: '45%',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    marginVertical: 4,
    fontWeight: 'bold',
  },
  fileCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    padding: 16,
    marginVertical: 8,
    alignItems: 'center',
  },
  fileText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
