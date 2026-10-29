import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Share,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { INITIAL_PEOPLE, Person } from '@/data/people';
import { ActionSheetModal, ActionOption } from '@/components/common/ActionSheetModal';

export const PeopleList: React.FC = () => {
  const [people, setPeople] = useState<Person[]>(INITIAL_PEOPLE);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const [actionSheetVisible, setActionSheetVisible] = useState(false);
  const [actionResult, setActionResult] = useState<string | null>(null);

  const handlePersonPress = (person: Person) => {
    setSelectedPerson(person);
    setActionSheetVisible(true);
  };

  const handleSelectOption = async (option: ActionOption) => {
    if (!selectedPerson) return;
    const person = selectedPerson;
    setActionSheetVisible(false);

    switch (option) {
      case 'Call':
        Alert.alert(
          'Dialing Contact',
          `Calling ${person.name} at ${person.phone}...`,
          [{ text: 'End Call', style: 'cancel' }]
        );
        setActionResult(`Calling ${person.name}...`);
        break;

      case 'Info':
        Alert.alert(
          `Contact Info: ${person.name}`,
          `Role: ${person.role}\nDepartment: ${person.department}\nPhone: ${person.phone}\nEmail: ${person.email}`,
          [{ text: 'Close', style: 'default' }]
        );
        setActionResult(`Displayed details for ${person.name}.`);
        break;

      case 'Share':
        try {
          await Share.share({
            message: `Contact Details:\n${person.name}\n${person.role}\n${person.phone}\n${person.email}`,
            title: `Share ${person.name}`,
          });
          setActionResult(`Shared contact profile for ${person.name}.`);
        } catch {
          Alert.alert('Shared', `Contact card for ${person.name} prepared.`);
        }
        break;

      case 'Delete':
        Alert.alert(
          'Confirm Deletion',
          `Remove ${person.name} from directory?`,
          [
            { text: 'Cancel', style: 'cancel' },
            {
              text: 'Delete',
              style: 'destructive',
              onPress: () => {
                setPeople((prev) => prev.filter((p) => p.id !== person.id));
                setActionResult(`Removed ${person.name} from directory.`);
              },
            },
          ]
        );
        break;

      case 'Cancel':
        setActionResult(null);
        break;
    }

    if (option !== 'Cancel') {
      setTimeout(() => {
        setActionResult(null);
      }, 3500);
    }
  };

  const handleAddNewPerson = () => {
    const randomId = Date.now().toString();
    const newPerson: Person = {
      id: randomId,
      name: `Colleague #${people.length + 1}`,
      role: 'Software Engineer',
      phone: `+33 6 ${Math.floor(10000000 + Math.random() * 90000000)}`,
      email: `engineer${people.length + 1}@domain.org`,
      avatar: require('../../../assets/images/people/default-colleague.jpg'),
      department: 'Mobile Development',
    };
    setPeople((prev) => [newPerson, ...prev]);
    setActionResult(`Added ${newPerson.name} to directory.`);
    setTimeout(() => setActionResult(null), 3500);
  };

  return (
    <View style={peopleStyles.container}>
      <View style={peopleStyles.topRow}>
        <Text style={peopleStyles.sectionTitle}>People Directory</Text>
        <TouchableOpacity
          style={peopleStyles.addBtn}
          onPress={handleAddNewPerson}
          activeOpacity={0.8}
        >
          <Ionicons name="add" size={16} color="#FFFFFF" />
          <Text style={peopleStyles.addBtnText}>Add Person</Text>
        </TouchableOpacity>
      </View>

      <Text style={peopleStyles.hintText}>
        Tap any person to open the Action Sheet.
      </Text>

      {actionResult && (
        <View style={peopleStyles.feedbackBanner}>
          <Ionicons name="information-circle-outline" size={16} color="#0F172A" />
          <Text style={peopleStyles.feedbackText}>{actionResult}</Text>
        </View>
      )}

      <View style={peopleStyles.list}>
        {people.map((person) => (
          <TouchableOpacity
            key={person.id}
            style={peopleStyles.personCard}
            onPress={() => handlePersonPress(person)}
            activeOpacity={0.7}
          >
            <Image
              source={person.avatar}
              style={peopleStyles.avatar}
              resizeMode="cover"
            />

            <View style={peopleStyles.personInfo}>
              <Text style={peopleStyles.personName}>{person.name}</Text>
              <Text style={peopleStyles.personRole}>{person.role}</Text>
              <Text style={peopleStyles.personDept} numberOfLines={1}>
                {person.department}
              </Text>
            </View>

            <Ionicons name="ellipsis-horizontal" size={18} color="#94A3B8" />
          </TouchableOpacity>
        ))}
      </View>

      <ActionSheetModal
        visible={actionSheetVisible}
        personName={selectedPerson?.name || ''}
        onClose={() => setActionSheetVisible(false)}
        onSelectOption={handleSelectOption}
      />
    </View>
  );
};

const peopleStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
  },
  addBtn: {
    backgroundColor: '#0F172A',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 6,
  },
  addBtnText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 12,
  },
  hintText: {
    fontSize: 12,
    color: '#64748B',
    marginBottom: 12,
  },
  feedbackBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#F1F5F9',
    borderColor: '#CBD5E1',
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderRadius: 6,
    marginBottom: 10,
  },
  feedbackText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#1E293B',
  },
  list: {
    gap: 8,
  },
  personCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 6,
    backgroundColor: '#E2E8F0',
    marginRight: 12,
  },
  personInfo: {
    flex: 1,
  },
  personName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0F172A',
  },
  personRole: {
    fontSize: 13,
    fontWeight: '500',
    color: '#334155',
    marginTop: 1,
  },
  personDept: {
    fontSize: 11,
    color: '#64748B',
    marginTop: 2,
  },
});
