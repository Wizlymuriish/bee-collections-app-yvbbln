
import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

export const colors = {
  primary: '#FFD700',      // Gold (bee theme)
  secondary: '#FFA500',    // Orange (bee theme)
  accent: '#FFFF00',       // Yellow (bee theme)
  background: '#FFFEF7',   // Light cream background
  backgroundAlt: '#FFF8DC', // Beige alternative background
  text: '#000000',         // Black text for readability
  grey: '#8B7355',         // Brown grey
  card: '#FFFFFF',         // White card background
  shadow: 'rgba(0, 0, 0, 0.1)',
};

export const buttonStyles = StyleSheet.create({
  instructionsButton: {
    backgroundColor: colors.primary,
    alignSelf: 'center',
    width: '100%',
  },
  backButton: {
    backgroundColor: colors.backgroundAlt,
    alignSelf: 'center',
    width: '100%',
  },
});

export const commonStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.background,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 800,
    width: '100%',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    color: colors.text,
    marginBottom: 15
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: colors.text,
    marginBottom: 10
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.text,
    marginBottom: 8,
    lineHeight: 24,
    textAlign: 'center',
  },
  section: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: colors.card,
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 15,
    padding: 15,
    marginVertical: 8,
    width: '100%',
    boxShadow: `0px 4px 8px ${colors.shadow}`,
    elevation: 4,
  },
  productCard: {
    backgroundColor: colors.card,
    borderRadius: 15,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 10,
    width: '45%',
    boxShadow: `0px 4px 8px ${colors.shadow}`,
    elevation: 4,
    alignItems: 'center',
  },
  icon: {
    width: 60,
    height: 60,
    tintColor: colors.text,
  },
  bottomTab: {
    flexDirection: 'row',
    backgroundColor: colors.card,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: colors.grey,
    boxShadow: `0px -2px 8px ${colors.shadow}`,
    elevation: 8,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  tabButtonActive: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    paddingHorizontal: 15,
  },
});
