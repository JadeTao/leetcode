class Solution
{
public:
  vector<int> intersection(vector<int> &nums1, vector<int> &nums2)
  {
    unordered_map<int, bool> map;
    vector<int> result;

    for (int i = 0; i < nums1.size(); i++)
    {
      int num = nums1[i];
      if (map.find(num) == map.end())
      {
        map[num] = false;
      }
    }

    for (int i = 0; i < nums2.size(); i++)
    {
      int num = nums2[i];
      if (map.find(num) != map.end())
      {
        map[num] = true;
      }
    }

    for (unordered_map<int, bool>::iterator iter = map.begin(); iter != map.end(); iter++)
    {
      if (iter->second == true)
      {
        result.push_back(iter->first);
      }
    }
    return result;
  }
};