const isAnagram = (str1, str2) => {
    const normalize = str =>
      str
        .toLowerCase()
        .replace(/[^a-z0-9]/gi, '')
        .split('')
        .sort()
        .join('');
    return normalize(str1) === normalize(str2);
  };
  
  console.log(isAnagram('So dark the con of man', ' Madonna of the Rocks')); 
  console.log(isAnagram('Things are good', 'dogs eat ants'));

