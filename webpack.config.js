module.exports = {
    entry : './src/index.js',
    module : {
        loaders : [
            {
               test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/
            },
            {
                test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/
             },
             {
                test: /\.css$/,
                loaders: 'style-loader!css-loader'
              },
              {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {}  
                  }
                ]
              }
        ]
    },
    output:{
        filename: 'bundle.js',
        path : __dirname +'/public'
    }
};