import pandas as pd
import matplotlib.pyplot as plt

file_path = './output/expanded_data_file.csv'
df = pd.read_csv(file_path)


plt.figure(figsize=(10, 6))
plt.bar(df['Name'], df['Age'], color='skyblue')

plt.xlabel('Name')
plt.ylabel('Age')
plt.title('User Age Distribution')

plt.xticks(rotation=45)


plt.tight_layout()  
plt.show()
