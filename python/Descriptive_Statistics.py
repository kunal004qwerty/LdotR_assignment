import pandas as pd
import numpy as np

file_path = './output/expanded_data_file.csv'
df = pd.read_csv(file_path)

mean_age = np.mean(df['Age'])
median_age = np.median(df['Age'])
std_dev_age = np.std(df['Age'])

print(f"Mean Age: {mean_age}")
print(f"Median Age: {median_age}")
print(f"Standard Deviation of Age: {std_dev_age}")
