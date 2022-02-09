import {Platform, StyleSheet} from 'react-native';

export const stylesHome = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121214',
  },
  container: {
    flex: 1,
    backgroundColor: '#121214',
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  title: {
    color: '#f1f1f1',
    fontSize: 24,
    fontWeight: 'bold',
  },
  titleTasks: {
    color: '#f1f1f1',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 20,
  },
  input: {
    color: '#fff',
    fontSize: 20,
    backgroundColor: '#29292e',
    padding: Platform.OS === 'ios' ? 15 : 12,
    marginTop: 10,
    borderRadius: 10,
  },
  button: {
    fontSize: 20,
    backgroundColor: '#eba417',
    padding: Platform.OS === 'ios' ? 15 : 12,
    marginTop: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#121214',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonTask: {
    backgroundColor: '#29292e',
    padding: 10,
    marginTop: 10,
    borderRadius: 50,
    alignItems: 'center',
  },
  taskTextContent: {
    color: '#f1f1f1',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
