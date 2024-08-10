# 引数が渡されているか確認
if [ "$#" -eq 0 ]; then
    echo "Usage: $0 <string>"
    exit 1
fi

# 引数を変数に代入
input=$1

# case文で処理を分岐
case $input in
    create)
        echo "create"
        # ここに処理を書く
        aws lambda create-function \
            --function-name put-trash-notification \
            --runtime "nodejs20.x" \
            --role arn:aws:iam::595616548866:role/trash-notification-bot-lambad-role \
            --zip-file "fileb://dist/index.zip" \
            --handler index.handler \
            --profile ksk
        ;;
    update-config)
        echo "update config"
        # ここに処理を書く
        aws lambda update-function-configuration \
            --function-name put-trash-notification \
            --environment file://.env/config.json \
            --profile ksk
        ;;
    update-code)
        echo "update code."
        # ここに処理を書く
        aws lambda update-function-code \
            --function-name put-trash-notification \
            --zip-file "fileb://dist/index.zip" \
            --profile ksk
        ;;

    *)
        echo "Invalid option: $input"
        echo "Usage: $0 {create|update}"
        exit 1
        ;;
esac