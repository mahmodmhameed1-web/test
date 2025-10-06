import { create } from 'zustand';

const useUserStore = create((set) => ({
  user: {
    fullName: '',
    email: '',
    phoneNumber: '',
    location: '',
    bio: '',
    dateOfBirth: '',
    language: 'English',
    currency: 'USD',
    profilePicture: '',
    emergencyContact: '',
  },
  updateUser: (field, value) =>
    set((state) => ({
      user: { ...state.user, [field]: value },
    })),
  resetUser: () =>
    set({
      user: {
        fullName: '',
        email: '',
        phoneNumber: '',
        location: '',
        bio: '',
        dateOfBirth: '',
        language: 'English',
        currency: 'USD',
        profilePicture: '',
        emergencyContact: '',
      },
    }),
}));

export default useUserStore;
