class Solution
{
public:
  // bool isAnagram(string s, string t) {
  //     sort(s.begin(), s.end());
  //     sort(t.begin(), t.end());
  //     return s == t;
  // }

  bool isAnagram(string s, string t)
  {
    int map[26] = {0};

    for (int i = 0; i < s.size(); i++)
    {
      map[s[i] - 'a']++;
    }

    for (int i = 0; i < t.size(); i++)
    {
      map[t[i] - 'a']--;
    }

    for (int i = 0; i < sizeof(map) / sizeof(map[0]); i++)
    {
      if (map[i] != 0)
        return false;
    }

    return true;
  }
};