$.lang.register('ranks.add.success-new', 'Добавлен новый ранк $2 на $1');
$.lang.register('ranks.add.success-update', 'Updated rank for hour $1 with name: $2');
$.lang.register('ranks.add.usage', 'Usage: !rankedit add [hour] [rankname]');
$.lang.register('ranks.custom.404', 'Cannot find user to give a custom rank: $1');
$.lang.register('ranks.custom.success', '$1 has received a custom rank of: $2');
$.lang.register('ranks.custom.usage', 'Usage: !rankedit custom [user] [rankname]');
$.lang.register('ranks.customdel.404', 'A custom rank does not exist for $1');
$.lang.register('ranks.customdel.success', 'Removed custom rank from $1');
$.lang.register('ranks.customdel.usage', 'Usage: !rankedit customdel [user]');
$.lang.register('ranks.del.404', 'Cannot find rank with hours value of $1');
$.lang.register('ranks.del.success', 'Deleted rank with hours value of $1');
$.lang.register('ranks.del.usage', 'Usage: !rankedit del [hour]');
$.lang.register('ranks.delself.404', 'You do not have a custom rank.');
$.lang.register('ranks.delself.success', 'Deleted your custom rank.');
$.lang.register('ranks.edit.usage', 'Usage: !rankedit [add [hours] [rankname] | del [hours] | custom [user] [rankname] | customdel [user] | settime [hours] | setcost [points]]');
$.lang.register('ranks.rank.404', 'There are no ranks defined!');
$.lang.register('ranks.rank.customsuccess', '$1 был назначен $2!');
$.lang.register('ranks.rank.maxsuccess', '$1 has reached the maximum rank of $2!');
$.lang.register('ranks.rank.norank.success', '$1 не имеет ранка, но ему еще осталось $2 часов до $3!');
$.lang.register('ranks.rank.success', '$1 достиг ранка $2! Осталось $3 часа до $4!');
$.lang.register('ranks.set.failure', 'Either not enough hours ($1) or $2 ($3) to set rank!');
$.lang.register('ranks.set.failure.nopoints', 'Not enough hours ($1) to set rank!');
$.lang.register('ranks.set.success', 'Set rank to: $1');
$.lang.register('ranks.set.usage', 'Usage: !rank set [rankname] Requires $1 hours in chat and $2 $3.');
$.lang.register('ranks.set.usage.nopoints', 'Usage: !rank set [rankname] Requires $1 hours in chat.');
$.lang.register('ranks.setcost.success', 'Set cost for users to create custom rank to $1 $2.');
$.lang.register('ranks.setcost.usage', 'Usage: !rankedit setcost [$1]');
$.lang.register('ranks.settime.success', 'Set time for users to create custom rank to $1 hours.');
$.lang.register('ranks.settime.usage', 'Usage: !rankedit settime [hours]');
