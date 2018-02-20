class Solution
{
public:
  string findLongestWord(string s, vector<string> &d)
  {
    string ans;
    for (int i = 0; i < d.size(); i++)
    {
      int idx = 0;
      for (int j = 0; j < s.size(); j++)
      {
        if (idx == d[i].size())
          break;
        if (s[j] == d[i][idx])
          idx += 1;
      }
      if (idx != d[i].size())
        continue;
      if (ans.size() < d[i].size() || (ans.size() == d[i].size() && d[i] < ans))
        ans = d[i];
    }
    return ans;
  }
};