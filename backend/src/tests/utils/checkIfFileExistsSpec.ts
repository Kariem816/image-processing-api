import checkIfFileExists from '../../utils/checkIfFileExists';

describe('File Exist Tests', () => {
  it('should return true if a certain file exists in a directory', () => {
    const filePath = './src/images/fjord.jpg';
    expect(checkIfFileExists(filePath)).toBe(true);
  });

  it("should return false if a certain file doesn't exist in a directory", () => {
    const filePath = './src/images/image.jpg';
    expect(checkIfFileExists(filePath)).toBe(false);
  });
});
