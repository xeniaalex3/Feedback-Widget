import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
  button: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.brand,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 12,
    bottom: 16
  },
  modal: {
    backgroundColor: theme.colors.surface_primary,
    paddingBottom: 16
  },
  indicator: {
    backgroundColor: theme.colors.text_primary,
    width: 56
  },
})
