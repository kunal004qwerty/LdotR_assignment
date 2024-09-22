import pandas as pd

file_path = './output/missingValues.csv'
df = pd.read_csv(file_path)

print(df)

cleaned_df = df.dropna()

print(cleaned_df)

cleaned_df.to_csv('./output/cleaned_file.csv', index=False)

