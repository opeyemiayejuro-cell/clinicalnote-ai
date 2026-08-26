export type Patient = { id: string; name: string; age: number; gender: string; phone: string; lastConsultation: string }
export type ClinicalNote = { chiefComplaint: string; presentIllness: string; pastHistory: string; medications: string; allergies: string; examination: string; investigations: string; assessment: string; plan: string }
const wait = <T,>(data: T) => Promise.resolve(data)
export const api = {
  login: (email: string, password: string) => wait({ token: 'mock-session', doctor: { name: 'Dr. Rachel Kim', email } }),
  getPatients: () => wait([] as Patient[]),
  createPatient: (patient: Partial<Patient>) => wait(patient),
  startConsultation: (patientId: string) => wait({ id: 'CONS-1001', patientId }),
  uploadAudio: (file: File) => wait({ fileName: file.name }),
  transcribeAudio: () => wait({ transcript: 'Mock transcript ready for clinician review.' }),
  generateClinicalNote: () => wait({ status: 'generated' }),
  askClinicalAssistant: (question: string) => wait({ answer: `Clinical support response for: ${question}` }),
  saveClinicalNote: (note: ClinicalNote) => wait({ ...note, saved: true }),
  approveClinicalNote: (note: ClinicalNote) => wait({ ...note, approved: true }),
}
