import pandas as pd

file_path = './output/expanded_data_file.csv'
df = pd.read_csv(file_path)


def top_rows_above_age(df, column, value):
    filtered_df = df[df[column]> value]
    return filtered_df.head(5)


result = top_rows_above_age(df, 'Age', 30)


print(result)