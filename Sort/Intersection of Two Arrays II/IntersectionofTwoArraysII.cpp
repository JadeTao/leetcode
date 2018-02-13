class Solution
{
  public:
    vector<int> intersect(vector<int> &nums1, vector<int> &nums2)
    {
        unordered_map<int, int> m;
        vector<int> r;

        for (int i = 0; i < nums1.size(); i++)
        {
            int num = nums1[i];
            if (m.find(num) == m.end())
            {
                m[num] = 1;
            }
            else
            {
                m[num] += 1;
            }
        }

        for (int i = 0; i < nums2.size(); i++)
        {
            int num = nums2[i];
            if (m.find(num) != m.end() && m[num] != 0)
            {
                r.push_back(num);
                m[num] -= 1;
            }
        }

        return r;
    }
};