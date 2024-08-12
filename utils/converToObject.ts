export const convertToSerializableObject = (leanDocument: any) => {
  for (const key of Object.keys(leanDocument)) {
    if (leanDocument[key].toString && leanDocument[key].toJson) {
      leanDocument[key] = leanDocument[key].toString();
    }
  }

  return leanDocument;
};
